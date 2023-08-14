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

Now when changing the password in any guard, the other session will be logged out of all guards.
