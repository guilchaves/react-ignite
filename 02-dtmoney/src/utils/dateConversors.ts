export function convertDateToPtBR(date: Date) {
    return new Intl.DateTimeFormat('pt-BR').format(date);
}

