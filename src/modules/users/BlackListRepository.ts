import knex from 'db/knex'

export async function ifEmailBlacklisted(email: string): Promise<boolean> {
  const emailsCount = await knex('black_list_emails').where({ email }).count('email')
  return emailsCount[0]['count(`email`)'] > 0
}
