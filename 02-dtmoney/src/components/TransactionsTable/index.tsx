import { Container } from './styles';
import { convertDateToPtBR } from '../../utils/dateConversors';
import { convertCurrencyToBRL } from '../../utils/currencyConversor';
import { useTransactions } from '../../hooks/useTransactions';

export function TransactionsTable() {
    const { transactions } = useTransactions();

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
                                {convertCurrencyToBRL(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>{convertDateToPtBR(new Date(transaction.createdAt))}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </Container>
    )
}

