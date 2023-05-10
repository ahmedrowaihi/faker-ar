# Localization

## Switching locales

Did you know Faker supports many different locales?  
By default, when using `import { faker } from '@faker-js/faker'` actually every available locale that is supported by Faker will be loaded and you can switch the locale at runtime with `faker.setLocale('ar')`.

::: tip
Alternatively you can also just use `faker.locale = 'ar'` instead to switch the locale.
:::

## Individual localized packages

By default, Faker will include **all** locale data.  
This might result in loading around 5 MB of data into memory and slow down startup times.

_But we got your back!_  
When encountering such a problem in a test or production environment, you can use the individual localized packages.

```ts
import { faker } from '@faker-js/faker/locale/ar';
```

This will then just load the German locales with additional English locales as fallback. The fallback is required due to not all locales containing data for all features. If you encounter a missing locale entry in your selected language, feel free to open a Pull Request fixing that issue.

::: info
The English locales are around 600 KB in size.  
All locales together are around 5 MB in size.
:::

:::tip Note
Some locales have limited coverage and rely more heavily on the English locale as the source for features they currently do not have.
However, in most cases, using a specific locale will be beneficial in the long term as specifying a locale reduces the time necessary for startup, which has a compounding effect on testing frameworks that reload the imports every execution.
:::

## Available locales

<!-- LOCALES-AUTO-GENERATED-START -->

<!-- Run 'pnpm run generate:locales' to update. -->

| Locale | Name    |
| :----- | :------ |
| ar     | Arabic  |
| en     | English |

<!-- LOCALES-AUTO-GENERATED-END -->
