export async function createLogin(login: string, password: string) {
    const response = await fetch('https://discord.com/api/v9/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            login,
            password,
            undelete: false,
            login_source: null,
            gift_code_sku_id: null,
        }),
    })
    const data = await response.json()

    return data
}
