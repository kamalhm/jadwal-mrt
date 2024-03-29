# Jadwal MRT

A website to show the schedule of nearest Jakarta MRT

## Preparing stations data

- `stations-raw` is raw MRT stations data from jakartamrt.co.id API

```shell
curl 'https://jakartamrt.co.id/id/val/stasiuns'
```

- Executing `schedule-cleanup.js` will create `stations.json` which is station data with only the necessary information.

- Copy the raw station to `website/index.js`

- Run the website locally to test

## Todo

- [ ] (P0) Check for public holiday on the schedule
- [ ] (P1) Make it look nice
