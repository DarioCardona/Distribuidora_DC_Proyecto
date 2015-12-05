var usuario = require('../schemas/usuario');

exports.getusuario = {
  handler: function(request, reply){
    var usuarios = usuario.find({});
    console.log('llego a pedir el usuario');
    reply(usuarios);
  }
}

exports.createusuario = {
  handler: function(request, reply){

    var newusuario = new usuario({

      tipo : request.payload.user_user,
      nombre : request.payload.user_name,
      password: request.payload.user_password,
      direccion : request.payload.user_dire,
      celular : request.payload.user_cel,
      correo: request.payload.user_mail,
      tel_fijo: request.payload.user_fijo,
      tabla : request.payload.user_tabla,
      zona : request.payload.user_zona

    });
    newusuario.save();
    console.log('usuario saved');
    return reply('ok');
  }
}
