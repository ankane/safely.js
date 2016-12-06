# Safely.js

```javascript
safely(keepGoingIfThisFunctionFails)
```

Exceptions are rescued and automatically reported to your favorite reporting service.

In development and test environments, exceptions are raised so you can fix them.

## Use It Everywhere

“Oh no, analytics brought down search”

```javascript
safely( function () {
  trackSearch(params)
})
```

Also aliases as `yolo`.

## Installation

Download [safely.js](safely.js), include it, and set the environment

```html
<script src="path/to/safely.js"></script>
<script>
  Safely.env = "production"
</script>
```

## Reporting

Reports exceptions to [Rollbar](https://rollbar.com) out of the box.

Customize reporting with:

```javascript
Safely.reportExceptionMethod = function (e) {
  // report to your favorite service
}
```

By default, exception messages are prefixed with [safely]. This makes it easier to spot rescued exceptions. Turn this off with:

```javascript
Safely.tag = false
```

To report exceptions manually:

```javascript
Safely.reportException(e)
```

## Contributing

Everyone is encouraged to help improve this project. Here are a few ways you can help:

- [Report bugs](https://github.com/ankane/safely.js/issues)
- Fix bugs and [submit pull requests](https://github.com/ankane/safely.js/pulls)
- Write, clarify, or fix documentation
- Suggest or add new features
