# tafqeet

Right before the closing body tag

<script>
function send_conversion(){
 gtag('config', 'AW-955968979');
 console.log('conversion sent');
// Event snippet for Tafqet lead conversion page
 gtag('event', 'conversion', {'send_to': 'AW-955968979/v_r5CJjU6ZQDENPb68cD'});
}
 
var elements = document.getElementsByClassName("v-btn--icon");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click',send_conversion, false);
}

</script>	

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
