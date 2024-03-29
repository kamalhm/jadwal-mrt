# Jadwal MRT

A website to show the schedule of nearest Jakarta MRT.

Live: https://jadwal-mrt.vercel.app/

## Preparing stations data

This entire website is static. Station data and schedules are hardcoded. When the schedules change, we will update it
manually.

- `stations-raw` is raw MRT stations data from jakartamrt.co.id API

```shell
curl 'https://jakartamrt.co.id/id/val/stasiuns'
```

- Executing `schedule-cleanup.js` with `bun` will create `stations.json` consisting of only the necessary information.

- Copy the raw station to `website/index.js`

- Run the website locally to test

## Todo

- [ ] (P0) Check for public holiday on the schedule
    - Currently not sure when does MRT Jakarta use the holiday schedule. Confirming schedule while on public holiday
      Google Maps, it's showing regular schedule. Will need manual checking later.
- [ ] (P1) Make it look nice
