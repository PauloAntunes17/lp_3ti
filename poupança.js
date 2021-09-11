extends contabancaria {
    private int diaderendimento;

    public void calcularnovosaldo(int taxarendimento) {
        this.setsaldo(taxarendimento * this.getsaldo());
    }
}