function  User(imagem, name, matricula,token) {
      this.imagem = imagem;
      this.name = name;
      this.matricula = matricula
      this.token = token   
      this.getImage = function () {
        return imagem;
    };
  }
  User.prototype.getAtributo = function () {
    return User;
};
export default User