import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles';

export function TransactionsTable() {
    const { transactions } = useContext(TransactionsContext);

    function convertDateTime(date: Date) {
        return new Intl.DateTimeFormat('pt-BR').format(date);
    }

    function convertToBRLCurrency(amount: number) {
        const convertedAmount = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(amount)
        return convertedAmount
    }

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {convertToBRLCurrency(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>{convertDateTime(new Date(transaction.createdAt))}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </Container>
    )
}

