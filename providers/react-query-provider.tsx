"use client"

import { QueryClientProvider, QueryClient } from "react-query";
// import React, { useState } from "react";

const ReactQueryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
};

export default ReactQueryProvider;
