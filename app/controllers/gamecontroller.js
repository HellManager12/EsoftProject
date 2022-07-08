const generateFields=()=>{
    let fields =[];
        fields.push(new field("START",0,0,0,false));
        fields.push(new field("KFC",1,150,50,true));
        fields.push(new field("Burger King",2,150,50,true));
        fields.push(new field("Subway",3,150,50,true));
        fields.push(new field("McDonalds",4,150,50,true));
        fields.push(new field("JAIL",5,0,0,false));
        fields.push(new field("Nike",6,250,100,true));
        fields.push(new field("Adidas",7,250,100,true));
        fields.push(new field("Puma",8,250,100,true));
        fields.push(new field("Gucci",9,250,100,true));
        fields.push(new field("PARKING",10,0,0,false));
        fields.push(new field("Amazon",11,350,150,true));
        fields.push(new field("Yandex",12,350,150,true));
        fields.push(new field("Google",13,350,150,true));
        fields.push(new field("Apple",14,350,150,true));
        fields.push(new field("GO TO JAIL",15,0,0,false));
        fields.push(new field("VolksWagen",16,450,200,true));
        fields.push(new field("Mazda",17,450,200,true));
        fields.push(new field("Toyota",18,450,200,true));
        fields.push(new field("BMW",19,450,200,true));
    return fields;
}
class Game{
    players=[]
    gameid;
    fields=[];
    turn;
    constructor(gameid,player){
        this.turn =0;
        this.gameid = gameid;
        let players =[];
        players.push(new Player(player[0]));
        players.push(new Player(player[1]));
        players.push(new Player(player[2]));
        this.players = players;       
        this.fields = generateFields();
    }

    buyField(fieldId,Id){
        let finded = this.fields.find(item =>item.fieldid == fieldId);
        if (finded.canbuy == true){
        finded.ownerid = Id;
        finded.canbuy = false;
        this.players.find(item => item.id ==Id).money -= finded.fieldprice;}
        else{
            console.log("Поле уже куплено")
        }
        
    }

}

class field{
    fieldname;
    fieldid;
    fieldprice;
    fieldrent;
    ownerid;
    canbuy;
    whostands;
    constructor(fieldname,fieldid,fieldprice,fieldrent,canbuy=false){
        this.fieldname = fieldname;
        this.fieldid = fieldid;
        this.fieldprice = fieldprice;
        this.fieldrent = fieldrent;
        this.ownerid = 0;
        this.canbuy = canbuy;
        this.whostands =[];
    }

}

class Player{
    money;
    place;
    id;
    isjailed;
    jailedturn;
    constructor(id){
        this.id =id;
        this.place =0;
        this.money = 1500;
        this.isjailed = false;
        this.jailedturn =0;
    }
}

const todo = new Game(12,[1,2,3]);
todo.buyField(2,1)
todo.buyField(2,2)
console.log(todo.fields);
console.log(todo.players);