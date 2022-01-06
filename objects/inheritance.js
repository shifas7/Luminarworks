class parent{
    bike(){
        console.log("passion pro");
    }
}


class child extends parent{
    bike(){
        super.bike()   //for calling parnt bike in child object
        console.log("royal enfield");
    }

}
var ch=new child()
ch.bike()

    
//this
//super
//constructor