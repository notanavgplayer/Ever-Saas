"use cleint";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useStore } from "@/hooks/use-pro-modal";
import axios , {AxiosError} from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING
} from '@paypal/react-paypal-js'
import { useMutation } from 'react-query'

const ProModal = () => {
  const { isOpen, onClose, subscriptionType, setSubscriptionType } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const proButtonHandler = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/api/stripe/${subscriptionType}`);
      window.location.href = response.data.url;
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      router.refresh();
    }
  };

  const createMutation = useMutation<{ data: any }, AxiosError, any, Response>(
    (): any => axios.post(`/api/paypalcreate/${subscriptionType}`),
  )




  const createPayPalOrder = async (): Promise<string> => {
    const response = await createMutation.mutateAsync({})
    console.log(response.data)
    if (response.data.orderID) {
      return response.data.orderID
    }
    else {
      setIsLoading(false);
      router.refresh();
    }
  }

  const captureMutation = useMutation<string, AxiosError, { orderID: string, subscriptionType: string }, Response>(
    (data) => axios.post(`/api/paypalcapture/${subscriptionType}`, data),
  )

  const onApprove = async (data: OnApproveData): Promise<void> => {
    try {
      setIsLoading(true);
      
      const result = await captureMutation.mutateAsync({ orderID: data.orderID })
      if (result) {
        localStorage.setItem("subscribe", "true");
      }
      window.location.reload()
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      router.refresh();
    }

  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-50 px-4 py-8 text-gray-700 focus:border-0 focus:outline-none focus-visible:ouline-none shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-blue-600 font-bold mb-2 text-center">
            Upgrade to Plura Pro
          </DialogTitle>
          <DialogDescription className="text-sm p-2 text-gray-700 text-justify">
            <Tabs defaultValue="month" className="">
              <TabsList className=" flex justify-center items-center">
                <TabsTrigger
                  onClick={() => {
                    setSubscriptionType("month");
                  }}
                  className="w-full"
                  value="month"
                >
                  Monthly $30
                </TabsTrigger>

                <TabsTrigger
                  onClick={() => {
                    setSubscriptionType("year");
                  }}
                  className="w-full relative"
                  value="year"
                >
                  Yearly $300
                  <span className="absolute top-[-16px] right-[-6px] bg-blue-600 shadow-2xl rounded-full p-2 text-white rotate-[-16deg] ">
                    {" "}
                    -15%{" "}
                  </span>
                </TabsTrigger>
              </TabsList>
              <div className="flex justify-center text-gray-600 tracking-wide text-sm items-center mt-2">
                <TabsContent value="month">
                  The monthly plan is the best option for those who want to try
                  out
                </TabsContent>
                <TabsContent value="year">
                  The yearly plan is the best option for those who want to save
                  money
                </TabsContent>
              </div>
            </Tabs>
          </DialogDescription>
        </DialogHeader>
        {/* <div className="mt-2 flex justify-center">
          <Button
            onClick={proButtonHandler}
            className="bg-blue-600  focus:border-0  focus-within:border-0 focus:outline-none  text-white px-6 py-3 rounded-[.4rem] hover:bg-blue-500"
          >
            Upgrade pro
            {isLoading && (
              <div className="ml-2">
                <Loader2 className="h-4 w-4 animate-spin  ml-1" />
              </div>
            )}
          </Button>
        </div> */}
              <div className="mt-2 flex justify-center">
          <PayPalScriptProvider
            options={{
              'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
              currency: 'USD',
            }}
          >
            <PayPalButtons
              style={{
                color: 'gold',
                shape: 'rect',
                label: 'pay',
                height: 50,
              }}
              fundingSource={FUNDING.PAYPAL}
              createOrder={createPayPalOrder}
              onApprove={onApprove}
            />
          </PayPalScriptProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
