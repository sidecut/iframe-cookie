# iframe-cookie

This is just a simple test app to see whether a child iframe can call a timeout function in the parent to prevent the parent from timing out.

## Setup

- Create a `.env` file
- Add a variable called `CHILD_SERVER_NAME` whose value is the hostname of an alias to `localhost`, for example `localhost-child`.
  - Note: on Fedora, at least, `/etc/hosts` already has aliases for `localhost` such as `localhost4`, so editing `/etc/hosts` may not be necessary.
- Edit `/etc/hosts` to add that `localhost` alias.

### Setup of maxAge

- In the `.env` file, configure `MAX_AGE_MS` to be the session length in milliseconds.  Since session length defaults to 20 minutes, shortening it will make testing session timeout easier.
