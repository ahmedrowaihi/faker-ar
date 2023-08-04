# @ahmedrowaihi/faker-ar

<div align="center">

## :no_entry: [DEPRECATED]  This fork is deprecated. Please use the original repo [faker-js/faker](https://github.com/faker-js/faker), it supports [feat(lorem): seed AR lorem (#2147)](https://github.com/faker-js/faker/commit/6137801ebfe2ff51ca82d52fcb2a63085bd17bcd) PR merged now :tada: :tada: :tada

### This repo was forked from [faker-js/faker](https://github.com/faker-js/faker)

### This fork was created to add support for Arabic language lorem ipsum text

  <img src="./docs/public/logo.svg" width="200"/>
  <h1>Faker</h1>
  <p>Generate massive amounts of fake (but realistic) data for testing and development.</p>
  
  [![npm version](https://badgen.net/npm/v/@ahmedrowaihi/faker-ar)](https://www.npmjs.com/package/@ahmedrowaihi/faker-ar)
  [![npm downloads](https://badgen.net/npm/dm/@ahmedrowaihi/faker-ar)](https://www.npmjs.com/package/@ahmedrowaihi/faker-ar)
  
[API Documentation](https://fakerjs.dev/guide/)
</div>

## 📦 Install

```bash
npm install --save-dev @ahmedrowaihi/faker-ar
```

## 📦 Usage

```ts
import { faker } from '@ahmedrowaihi/faker-ar';

export const USERS: User[] = [];

export function createRandomUser(): User {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  USERS.push(createRandomUser());
});
```
