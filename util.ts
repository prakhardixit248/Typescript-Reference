

export function heading(message: string = ''): void {
    console.log('\x1b[36m%s\x1b[0m', `------------------ ${message.toUpperCase()} ------------------`);
}

export function separator(message: string = ''): void {
    console.log('\n\n\n\n');
}
