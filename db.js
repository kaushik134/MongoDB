// Using JavaScript Create collection
// test> use node_5
// switched to db node_5

// node_5> load('db.js')
// true


db.client_master.insertMany([
    {cno:"C00001",name:"Ivan",city:"Bombay",pincode:400054,state:"Maharashtra",baldue:15000},
    {cno:"C00002",name:"Vandana",city:"Madras",pincode:780001,state:"Tamilnadu",baldue:10000},
    {cno:"C00003",name:"Pramada",city:"Bombay",pincode:400057,state:"Maharashtra",baldue:5000},
    {cno:"C00004",name:"Basu",city:"Bombay",pincode:400056,state:"Maharashtra",baldue:8000},
    {cno:"C00005",name:"Ravi",city:"Delhi",pincode:100001,state:"Maharashtra",baldue:2000},
    {cno:"C00006",name:"Rukmini",city:"Bombay",pincode:400050,state:"Maharashtra",baldue:12000},
    {cno:"C00007",name:"kaushik",city:"surat",pincode:394185,state:"Gujarat",baldue:12000},
])


db.product_master.insertMany([
    {pno:"P00001",pname:"1.44floppies",profitpercent:5,unitmeasured:"piece",qtyonhand:100,recorderlvl:20,sellprice:525,costprice:500},
    {pno:"P00002", pname:'Monitors', profitpercent:6, unitmeasured:'piece', qtyonhand:10, recorderlvl:3, sellprice:12000,costprice:11200},
    {pno:"P00003", pname:'Mouse',profitpercent:5, unitmeasured:'piece', qtyonhand:20, recorderlvl:5, sellprice:1050, costprice:500},
    {pno:"P00004", pname:'1.22 floppies',profitpercent:5, unitmeasured:'piece', qtyonhand:100, recorderlvl:20, sellprice:525, costprice:500},
    {pno:"P00005", pname:'Keyboards',profitpercent:2, unitmeasured:'piece',qtyonhand:10,recorderlvl:3,sellprice:3150, costprice:3050},
    {pno:"P00006", pname:'CD Drive', profitpercent:2.50, unitmeasured:'piece',qtyonhand:10,recorderlvl:3,sellprice:5250,costprice:5100},
    {pno:"P00007", pname:'540 HDD',profitpercent:4, unitmeasured:'piece',qtyonhand:10,recorderlvl:3,sellprice:8400, costprice:8000},
    {pno:"P00008", pname:'1.44 Drive',profitpercent:5, unitmeasured:'piece', qtyonhand:10, recorderlvl:3, sellprice:1050,costprice: 1000},
    {pno:"P00009", pname:'1.22 Drive',profitpercent:5, unitmeasured:'piece',qtyonhand:2,recorderlvl:3,sellprice:1050, costprice:1000},
])



db.salesman_master.insertMany([
    
    {salesman_no:'S00002', salesmanname:'Manish', address:'65, nariman', city:'Bombay', pincode:400001, state:'Mah', salamt:3000, tgttoget:200, ytdsale:100, remark:'Good'},
    {salesman_no:'S00001', salesmanname:'Kiran', address:'A/14 worli', city:'Bombay', pincode:400002, state:'Mah', salamt:3000, tgttoget:100, ytdsale:50, remark:'Good'},
    {salesman_no:'S00003', salesmanname:'Ravi', address:'P-7 Bandra', city:'Bombay', pincode:400032, state:'Mah', salamt:3000, tgttoget:200, ytdsale:100, remark:'Good'},
    {salesman_no:'S00004', salesmanname:'Ashish', address:'A/5 Juhu', city:'Bombay', pincode:400044, state:'Mah', salamt:3500, tgttoget:200, ytdsale:150, remark:'Good'}
   
   ])