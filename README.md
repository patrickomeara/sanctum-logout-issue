This is a demo repository for the PR https://github.com/laravel/sanctum/pull/461

```
git clone https://github.com/patrickomeara/sanctum-logout-issue.git
cd sanctum-logout-issue
composer install
php artisan migrate
npm install
npm run dev
```

Open http://sanctum-logout-issue.test/quick-login in two different browsers. This will log you in as the only user int he database.

### Branch: `main`

Changing the password in one browser, allows you to still make sanctum requests in both. However refreshing the other browser will log you out. 

### Branch `auth.session`

Here you will see the `auth.session` middleware to sanctum endpoints returns 500 errors.

We can add macros for the missing methods for debugging purposes, but this middleware is not suitable here, as it will try to re write the password hash when it is missing. 

```php
        RequestGuard::macro('viaRemember', fn () => false);
        RequestGuard::macro('logoutCurrentDevice', fn () => false);
```

### Branch `ensure-not-logged-out`

Here you will see that changing the password in one browser, will still allow you to make sanctum requests in the browser, but not in the other. You are also logged out in the other browser when refreshing.
