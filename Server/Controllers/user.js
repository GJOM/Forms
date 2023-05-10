import { database } from "../Db/database.js";

export const getAccounts = (req, res) => {
    const query = "SELECT * FROM accounts WHERE login = ? AND password = ?";

    const { email, password } = req.body

    database.query(query, [email, password], (err, data) => {
        if (err) return res.json(err);

        /* res.redirect("/finances"); */
        return res.status(200).json(data);
    })
}

export const addAccounts = (req, res) => {
    const query = "INSERT INTO accounts(`login`, `password`) VALUES(?)"

    const values = [
        req.body.email,
        req.body.password,
    ];

    database.query(query, [values], (err) => {
        if (err) return res.json({ error: "Email já cadastrado!" });

        return res.status(200).json("Conta cadastrada com sucesso!");
    })
}