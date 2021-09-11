private String cliente();

private float saldo();

public float sacar(float valor) {
    float saldoatual = this.saldo;
    saldoatual -= valor;

    if (saldoatual < 0) {
        return this.saldo;

    }

    return this.saldo -= valor;

    public void depositar (float valor) {
        THIS.SALDO += valor;
    }
}
