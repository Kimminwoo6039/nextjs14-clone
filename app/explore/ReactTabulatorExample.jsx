"use client"
import {useEffect, useRef} from "react";
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-responsive-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';

export function DataTable1() {
    const tableRef = useRef();

    useEffect(() => {
        const table = $(tableRef.current).DataTable({
            data: [
                ['한국', 'Developer', '서울', '6832', '2020/10/22', '$114,500'],
                ['일본', 'Developer', '도쿄', '6832', '2020/10/22', '$114,500'],
                ['미국', 'Developer', '워싱턴', '6832', '2020/10/22', '$114,500'],
                ['한국', 'Developer', '서울', '6832', '2020/10/22', '$114,500'],
                ['일본', 'Developer', '도쿄', '6832', '2020/10/22', '$114,500'],
                ['미국', 'Developer', '워싱턴', '6832', '2020/10/22', '$114,500'],
                ['한국', 'Developer', '서울', '6832', '2020/10/22', '$114,500'],
                ['일본', 'Developer', '도쿄', '6832', '2020/10/22', '$114,500'],
                ['미국', 'Developer', '워싱턴', '6832', '2020/10/22', '$114,500'],
                ['한국', 'Developer', '서울', '6832', '2020/10/22', '$114,500'],
                ['일본', 'Developer', '도쿄', '6832', '2020/10/22', '$114,500'],
                ['미국', 'Developer', '워싱턴', '6832', '2020/10/22', '$114,500'],
            ],
            columns: [
                { title: 'Name' },
                { title: 'Position' },
                { title: 'Office' },
                { title: 'Extn.' },
                { title: 'Start data' },
                { title: 'Salary' },
            ],
            responsive: true, // 반응형 켜기
            // options
        });

        // 언마운트 시 destroy
        return () => {
            table.destroy();
        };
    }, []);

    return <table className="table stripe row-border order-column table-striped cell-border"  ref={tableRef} style={{ width: '100%' }}></table>;
}