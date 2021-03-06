<!DOCTYPE html>

<html lang="en">
<head>
    @if (env('APP_ENV') === 'production')
        {{--Google analytics code goes here--}}
    @endif

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <title>App title</title>
    <link rel="stylesheet" href="{{ asset("dist/app.css?v={$version}") }}">

    <base href="{{ url('/') }}">

    <script>
        window.APP = {
            url: '{{ url('/') }}',
            env: {
                APP_ENV: '{{ env('APP_ENV') }}',
                APP_DEBUG: '{{ env('APP_DEBUG') }}' === '1',
            },
            routes: JSON.parse('{!! json_encode($routes, JSON_HEX_QUOT|JSON_HEX_APOS) !!}'),
            version: '{{ $version }}',
        };
    </script>
</head>

<body>
<div id="root-app"></div>
<script src="{{ asset("dist/app.js?v={$version}") }}"></script>
</body>
</html>
