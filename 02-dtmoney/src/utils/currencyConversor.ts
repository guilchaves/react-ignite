export function convertCurrencyToBRL(amount: number) {
    const convertedAmount = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(amount)
    return convertedAmount
}
