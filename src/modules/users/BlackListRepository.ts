import knex from 'db/knex'

export async function ifEmailBlacklisted(email: string): Promise<boolean> {
  const emailsCount = await knex('black_list_emails').where({ email }).count('email as c').first()
  return emailsCount.c > 0
}
