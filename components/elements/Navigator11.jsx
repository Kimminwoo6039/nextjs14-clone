
"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";

export function Component() {
    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <div className="p-1">
                        <Sidebar.Item href="#" icon={HiChartPie} className="hover:bg-[rgba(144,144,144,0.45)] lg:hover:bg-[rgba(144,144,144,0.45)]">
                            Dashboard
                        </Sidebar.Item>
                    </div>
                    <div className="p-1 text-white">
                        <Sidebar.Collapse icon={HiShoppingBag} label="학급관리"
                                          className="ml-0 flex-1 whitespace-nowrap text-left hover:bg-[rgba(144,144,144,0.45)]">
                            <Sidebar.Item href="#" className="hover:bg-[rgba(144,144,144,0.45)] ml-4">학생 현황</Sidebar.Item>
                            <Sidebar.Item href="#" className="hover:bg-[rgba(144,144,144,0.45)] ml-4">디바이스 현황</Sidebar.Item>
                        </Sidebar.Collapse>
                    </div>
                    <div className="p-1 text-white">
                        <Sidebar.Collapse icon={HiShoppingBag} label="유해콘텐츠 탐지"
                                          className="ml-0 flex-1 whitespace-nowrap text-left hover:bg-[rgba(144,144,144,0.45)]">
                            <Sidebar.Item href="#" className="hover:bg-[rgba(144,144,144,0.45)] ml-4">탐지 현황</Sidebar.Item>
                            <Sidebar.Item href="#" className="hover:bg-[rgba(144,144,144,0.45)] ml-4">디바이스별 탐지
                                분석</Sidebar.Item>
                        </Sidebar.Collapse>
                    </div>
                    <div className="p-1 text-white">
                        <Sidebar.Collapse icon={HiShoppingBag} label="서비스 설정"
                                          className="ml-0 flex-1 whitespace-nowrap text-left hover:bg-[rgba(144,144,144,0.45)]">
                            <Sidebar.Item href="#" className="hover:bg-[rgba(144,144,144,0.45)] ml-4">탐지제어</Sidebar.Item>
                            <Sidebar.Item href="#" className="hover:bg-[rgba(144,144,144,0.45)] ml-4">실시간 검사
                                시간</Sidebar.Item>
                            <Sidebar.Item href="#" className="hover:bg-[rgba(144,144,144,0.45)] ml-4">탐지 정책</Sidebar.Item>
                        </Sidebar.Collapse>
                    </div>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
