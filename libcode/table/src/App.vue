<template>
  <div id="app">
    <km-grid border :row-height="40" :data="data" :columns="columns" :height="400"></km-grid>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data() {
    return {
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center',
          fixed: 'left'
        },
        {
          title: '操作',
          type: 'handle',
          handle: [
            {
              type: 'edit'
            }
          ],
          width: 60,
          align: 'left',
          fixed: 'right'
        },
        {
          title: '机构编码',
          key: 'code',
          width: 150
        },
        {
          title: '机构名称',
          key: 'name',
          width: 200
        },
        {
          title: '机构类型',
          key: 'type',
          width: 150,
          enumData: {
            '0': '总部',
            '1': '区域中心',
            '2': '自营店',
            '3': '加盟店',
            '4': '配送中心'
          }
        },
        {
          title: '联系人',
          key: 'contacts',
          width: 150
        },
        {
          title: '手机/电话',
          key: 'telephone',
          width: 150
        },
        {
          title: '上级机构',
          key: 'pname',
          width: 200
        },
        {
          title: '状态',
          key: 'finallStatus',
          width: 200,
          sortable: true,
          type: 'enum',
          enumData: {
            '0': '草稿',
            '1': '待批',
            // '2': '审核中',
            '3': '已驳回',
            '4': '已审核',
            '9': '已作废'
          },
          enumType: {
            '0': 'default',
            '1': 'processing',
            '2': 'warning',
            '3': 'error',
            '4': 'success',
            '9': 'warning'
          }
        },
        {
          title: '创建人',
          key: 'creatorName',
          width: 100
        },
        {
          title: '驳回原因',
          key: 'refuseReason',
          width: 100,
          sortable: true
        },
        {
          title: '最后修改时间',
          key: 'gmtModified',
          width: 100
        },
        {
          title: '同步失败原因',
          key: 'failReason',
          width: 100
        }
      ],
      data: [
        {
          "id": "1188641240837578752",
          "pid": "78",
          "pname": "新零售联调测试（勿动）",
          "pcode": "0000",
          "code": "598745",
          "name": "异步机构3443",
          "shortName": null,
          "type": "2",
          "email": null,
          "contacts": null,
          "telephone": null,
          "areaSize": null,
          "detailAddress": null,
          "position": null,
          "memo": null,
          "status": "4",
          "approveStatus": "0",
          "failReason": null,
          "creatorId": "13804",
          "creatorName": "廖龙华",
          "gmtCreate": "2019-10-28 10:18:50",
          "updateOperId": "13804",
          "updateOperName": "廖龙华",
          "gmtModified": "2019-10-28 10:18:54",
          "groupInfoId": null,
          "groupId": null,
          "groupType": null,
          "url": null,
          "version": "1",
          "approverId": "13804",
          "approverName": "廖龙华",
          "approveTime": "2019-10-28 10:18",
          "refuseReason": "",
          "approveResult": "4",
          "finallStatus": "3",
          "userId": null,
          "typeName": null
        },
        {
          "id": "1188694496267800576",
          "pid": "5497",
          "pname": "测试区域中心",
          "pcode": "0001",
          "code": "5245",
          "name": "自营店0002",
          "shortName": null,
          "type": "2",
          "email": null,
          "contacts": null,
          "telephone": null,
          "areaSize": null,
          "detailAddress": null,
          "position": null,
          "memo": null,
          "status": "4",
          "approveStatus": "0",
          "failReason": null,
          "creatorId": "13758",
          "creatorName": "邹先生",
          "gmtCreate": "2019-10-28 13:50:27",
          "updateOperId": "13758",
          "updateOperName": "邹先生",
          "gmtModified": "2019-10-28 13:50:33",
          "groupInfoId": null,
          "groupId": null,
          "groupType": null,
          "url": null,
          "version": "1",
          "approverId": "13758",
          "approverName": "邹先生",
          "approveTime": "2019-10-28 13:50",
          "refuseReason": "",
          "approveResult": "4",
          "finallStatus": "3",
          "userId": null,
          "typeName": null
        },
        {
          "id": "1188645831721410560",
          "pid": "103",
          "pname": "区域中心7（测试9001）",
          "pcode": "0023",
          "code": "652365",
          "name": "测试机构4342",
          "shortName": "多少度",
          "type": "2",
          "email": null,
          "contacts": null,
          "telephone": null,
          "areaSize": null,
          "detailAddress": null,
          "position": null,
          "memo": null,
          "status": "4",
          "approveStatus": "0",
          "failReason": null,
          "creatorId": "13804",
          "creatorName": "廖龙华",
          "gmtCreate": "2019-10-28 10:37:05",
          "updateOperId": "13804",
          "updateOperName": "廖龙华",
          "gmtModified": "2019-10-28 14:22:10",
          "groupInfoId": null,
          "groupId": null,
          "groupType": null,
          "url": null,
          "version": "2",
          "approverId": "13804",
          "approverName": "廖龙华",
          "approveTime": "2019-10-28 14:22",
          "refuseReason": "",
          "approveResult": "4",
          "finallStatus": "3",
          "userId": null,
          "typeName": null
        },
        {
          "id": "1188793863259598848",
          "pid": "78",
          "pname": "新零售联调测试（勿动）",
          "pcode": "0000",
          "code": "443654",
          "name": "测试机构0001",
          "shortName": null,
          "type": "2",
          "email": null,
          "contacts": null,
          "telephone": null,
          "areaSize": null,
          "detailAddress": null,
          "position": null,
          "memo": null,
          "status": "4",
          "approveStatus": "0",
          "failReason": null,
          "creatorId": "13808",
          "creatorName": "何涛",
          "gmtCreate": "2019-10-28 20:25:18",
          "updateOperId": "13808",
          "updateOperName": "何涛",
          "gmtModified": "2019-10-28 20:25:25",
          "groupInfoId": null,
          "groupId": null,
          "groupType": null,
          "url": null,
          "version": "1",
          "approverId": "13808",
          "approverName": "何涛",
          "approveTime": "2019-10-28 20:25",
          "refuseReason": "",
          "approveResult": "4",
          "finallStatus": "3",
          "userId": null,
          "typeName": null
        },
        {
          "id": "1188796148362555392",
          "pid": "78",
          "pname": "新零售联调测试（勿动）",
          "pcode": "0000",
          "code": "161312",
          "name": "测试机构0003",
          "shortName": null,
          "type": "2",
          "email": null,
          "contacts": null,
          "telephone": null,
          "areaSize": null,
          "detailAddress": null,
          "position": null,
          "memo": null,
          "status": "4",
          "approveStatus": "0",
          "failReason": null,
          "creatorId": "13808",
          "creatorName": "何涛",
          "gmtCreate": "2019-10-28 20:34:23",
          "updateOperId": "13808",
          "updateOperName": "何涛",
          "gmtModified": "2019-10-28 20:34:27",
          "groupInfoId": null,
          "groupId": null,
          "groupType": null,
          "url": null,
          "version": "1",
          "approverId": "13808",
          "approverName": "何涛",
          "approveTime": "2019-10-28 20:34",
          "refuseReason": "",
          "approveResult": "4",
          "finallStatus": "3",
          "userId": null,
          "typeName": null
        },
        {
          "id": "1189058133687918592",
          "pid": "103",
          "pname": "区域中心7（测试9001）",
          "pcode": "0023",
          "code": "523698",
          "name": "异步机构432",
          "shortName": null,
          "type": "2",
          "email": null,
          "contacts": null,
          "telephone": null,
          "areaSize": null,
          "detailAddress": null,
          "position": null,
          "memo": null,
          "status": "4",
          "approveStatus": "0",
          "failReason": null,
          "creatorId": "13804",
          "creatorName": "廖龙华",
          "gmtCreate": "2019-10-29 13:55:25",
          "updateOperId": "13804",
          "updateOperName": "廖龙华",
          "gmtModified": "2019-10-29 13:55:30",
          "groupInfoId": null,
          "groupId": null,
          "groupType": null,
          "url": null,
          "version": "1",
          "approverId": "13804",
          "approverName": "廖龙华",
          "approveTime": "2019-10-29 13:55",
          "refuseReason": "",
          "approveResult": "4",
          "finallStatus": "3",
          "userId": null,
          "typeName": null
        },
        {
          "id": "1189349661341708288",
          "pid": "103",
          "pname": "区域中心7（测试9001）",
          "pcode": "0023",
          "code": "653699",
          "name": "还能不能同步了",
          "shortName": null,
          "type": "2",
          "email": null,
          "contacts": null,
          "telephone": null,
          "areaSize": null,
          "detailAddress": null,
          "position": null,
          "memo": null,
          "status": "4",
          "approveStatus": "0",
          "failReason": null,
          "creatorId": "13804",
          "creatorName": "廖龙华",
          "gmtCreate": "2019-10-30 09:13:51",
          "updateOperId": "13804",
          "updateOperName": "廖龙华",
          "gmtModified": "2019-10-30 09:13:58",
          "groupInfoId": null,
          "groupId": null,
          "groupType": null,
          "url": null,
          "version": "1",
          "approverId": "13804",
          "approverName": "廖龙华",
          "approveTime": "2019-10-30 09:13",
          "refuseReason": "",
          "approveResult": "4",
          "finallStatus": "3",
          "userId": null,
          "typeName": null
        },
        {
          "id": "1189470689757806592",
          "pid": "103",
          "pname": "区域中心7（测试9001）",
          "pcode": "0023",
          "code": "968575",
          "name": "同步门店4453",
          "shortName": null,
          "type": "4",
          "email": null,
          "contacts": null,
          "telephone": null,
          "areaSize": null,
          "detailAddress": null,
          "position": null,
          "memo": null,
          "status": "4",
          "approveStatus": "0",
          "failReason": null,
          "creatorId": "13804",
          "creatorName": "廖龙华",
          "gmtCreate": "2019-10-30 17:14:46",
          "updateOperId": "13804",
          "updateOperName": "廖龙华",
          "gmtModified": "2019-10-30 17:15:06",
          "groupInfoId": null,
          "groupId": null,
          "groupType": null,
          "url": null,
          "version": "3",
          "approverId": "13804",
          "approverName": "廖龙华",
          "approveTime": "2019-10-30 17:15",
          "refuseReason": "",
          "approveResult": "4",
          "finallStatus": "3",
          "userId": null,
          "typeName": null
        },
        {
          "id": "1189471951593193472",
          "pid": "103",
          "pname": "区域中心7（测试9001）",
          "pcode": "0023",
          "code": "253654",
          "name": "一次吧111",
          "shortName": null,
          "type": "2",
          "email": null,
          "contacts": null,
          "telephone": null,
          "areaSize": null,
          "detailAddress": null,
          "position": null,
          "memo": null,
          "status": "3",
          "approveStatus": "0",
          "failReason": null,
          "creatorId": "13804",
          "creatorName": "廖龙华",
          "gmtCreate": "2019-10-30 17:19:47",
          "updateOperId": "13804",
          "updateOperName": "廖龙华",
          "gmtModified": "2019-10-31 09:51:55",
          "groupInfoId": null,
          "groupId": null,
          "groupType": null,
          "url": null,
          "version": "4",
          "approverId": "13804",
          "approverName": "廖龙华",
          "approveTime": "2019-10-31 09:51",
          "refuseReason": "萨顶顶",
          "approveResult": "3",
          "finallStatus": "2",
          "userId": null,
          "typeName": null
        },
        {
          "id": "1199597041185988608",
          "pid": "5497",
          "pname": "测试区域中心",
          "pcode": "0001",
          "code": "53689",
          "name": "ccseee",
          "shortName": "sddd",
          "type": "2",
          "email": null,
          "contacts": null,
          "telephone": null,
          "areaSize": null,
          "detailAddress": null,
          "position": null,
          "memo": null,
          "status": "3",
          "approveStatus": null,
          "failReason": null,
          "creatorId": "14127",
          "creatorName": "pis总部1",
          "gmtCreate": "2019-11-27 15:53:17",
          "updateOperId": "14127",
          "updateOperName": "pis总部1",
          "gmtModified": "2019-11-27 15:53:38",
          "groupInfoId": null,
          "groupId": null,
          "groupType": null,
          "url": null,
          "version": "3",
          "approverId": "14127",
          "approverName": "pis总部1",
          "approveTime": "2019-11-27 15:53",
          "refuseReason": "sdd",
          "approveResult": "3",
          "finallStatus": "2",
          "userId": null,
          "typeName": null
        },
        {
          "id": "1199597551653756928",
          "pid": "78",
          "pname": "新零售联调测试（勿动）",
          "pcode": "0000",
          "code": "566985",
          "name": "sadsdw",
          "shortName": "sd55",
          "type": "2",
          "email": null,
          "contacts": null,
          "telephone": null,
          "areaSize": null,
          "detailAddress": null,
          "position": null,
          "memo": null,
          "status": "4",
          "approveStatus": "0",
          "failReason": null,
          "creatorId": "14127",
          "creatorName": "pis总部1",
          "gmtCreate": "2019-11-27 15:55:18",
          "updateOperId": "14127",
          "updateOperName": "pis总部1",
          "gmtModified": "2019-11-27 15:56:34",
          "groupInfoId": null,
          "groupId": null,
          "groupType": null,
          "url": null,
          "version": "4",
          "approverId": "14127",
          "approverName": "pis总部1",
          "approveTime": "2019-11-27 15:56",
          "refuseReason": "",
          "approveResult": "4",
          "finallStatus": "3",
          "userId": null,
          "typeName": null
        },
        {
          "id": "1203932746649550848",
          "pid": "5501",
          "pname": "区域中心",
          "pcode": "1003",
          "code": "001234",
          "name": "bug24257门店测试",
          "shortName": null,
          "type": "2",
          "email": null,
          "contacts": null,
          "telephone": null,
          "areaSize": null,
          "detailAddress": null,
          "position": null,
          "memo": null,
          "status": "4",
          "approveStatus": "0",
          "failReason": null,
          "creatorId": "13758",
          "creatorName": "邹先生",
          "gmtCreate": "2019-12-09 15:01:49",
          "updateOperId": "13758",
          "updateOperName": "邹先生",
          "gmtModified": "2019-12-09 15:01:52",
          "groupInfoId": null,
          "groupId": null,
          "groupType": null,
          "url": null,
          "version": "1",
          "approverId": "13758",
          "approverName": "邹先生",
          "approveTime": "2019-12-09 15:01",
          "refuseReason": "",
          "approveResult": "4",
          "finallStatus": "3",
          "userId": null,
          "typeName": null
        },
        {
          "id": "1204650163658911744",
          "pid": "78",
          "pname": "新零售联调测试（勿动）",
          "pcode": "0000",
          "code": "5236",
          "name": "三点定位",
          "shortName": null,
          "type": "2",
          "email": null,
          "contacts": null,
          "telephone": null,
          "areaSize": null,
          "detailAddress": null,
          "position": null,
          "memo": null,
          "status": "4",
          "approveStatus": "0",
          "failReason": null,
          "creatorId": "14127",
          "creatorName": "pis总部1",
          "gmtCreate": "2019-12-11 14:32:35",
          "updateOperId": "14127",
          "updateOperName": "pis总部1",
          "gmtModified": "2019-12-11 14:33:19",
          "groupInfoId": null,
          "groupId": null,
          "groupType": null,
          "url": null,
          "version": "4",
          "approverId": "14127",
          "approverName": "pis总部1",
          "approveTime": "2019-12-11 14:33",
          "refuseReason": "",
          "approveResult": "4",
          "finallStatus": "3",
          "userId": null,
          "typeName": null
        }
      ]
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
