//importar el modulo DE REDIS
var redis = require('redis');
const { callback_or_emit } = require('redis/lib/utils');

class Redis {
    constructor(){//cada vez que se instancie un objeto automaticamente se invoca a constructor y se crea la vble client
        this.client=redis.createClient();
        this.res=0;
    }
    
    redisConnect(){
      //establecer conexion
        this.client.on('connect', function() {
            console.log('connected');
        });  
    }
    /*redisSearch(message){
        this.redisConnect();
        this.res=false;
        // busqueda en BD
        this.res =this.client.exists(message, function(err, reply) {
           
            if (reply === 1) {
                console.log('exists');
                console.log(Redis.res);
            } else {
                console.log('doesn\'t exist');
                 
            }
        },
        
        );
       return this.res;
    }*/
    /*redisDelete(message){
        this.redisConnect();
        //eliminar de la BD
        this.client.del(message, function(err, reply) {
            console.log(reply);
        });
    }*/
   /*redisSearch2(message){
        this.redisConnect();
        this.result=2;
        // busqueda en BD
        this.client.get(message, function(err, reply) {
            console.log(reply); 
                   });
       return this.result;
    }*/
    /*redisInsert(message){
        this.redisConnect();
        //insertar mensajes
        this.client.set('message1', 'pusheo un mensaje', function(err, reply) {//Si fallase la operación, el argumento err de la función callback representa el error--- ademas se cambia "prototypeclient" por "client"
        console.log(reply);
  });
    }*/
    redisCheck(message){
        this.redisConnect();
        //contar mensajes
        this.client.dbsize(function(err, reply) {
            console.log(reply);
        });
        };
};


module.exports = Redis;