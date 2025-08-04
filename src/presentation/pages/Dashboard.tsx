import React from "react";
import data from "./data.json";
import {SidebarInset, SidebarProvider} from "@/presentation/components/ui/sidebar.tsx";
import {SiteHeader} from "@/presentation/components/dashboard/site-header.tsx";
import {ChartAreaInteractive} from "@/presentation/components/dashboard/chart-area-interactive.tsx";
import {DataTable} from "@/presentation/components/dashboard/data-table.tsx";
import {AppSidebar} from "@/presentation/components/dashboard/app-sidebar.tsx";
import {SectionCards} from "@/presentation/components/dashboard/section-cards.tsx";

export default function Dashboard() {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset"/>
            <SidebarInset>
                <SiteHeader/>
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            <SectionCards/>
                            <div className="px-4 lg:px-6">
                                <ChartAreaInteractive/>
                            </div>
                            <DataTable data={data}/>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
};
