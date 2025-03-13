import { useState } from "react";

function Box() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hidden = () => {
    setEmail();
    setPassword("");
  };

  return (
    <div className="pai">
      <div className="box">
        <h1>Seja bem vindo!</h1>

        <div className="login">
          <label>E-mail</label>

          <input
            type="text"
            placeholder="xxxxx@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>

          <input
            type="password"
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <a href="#">Esqueceu sua senha?</a>

        <input type="submit" id="btn" value="Entrar" onClick={() => hidden()} />
      </div>
    </div>
  );
}

export default Box;
