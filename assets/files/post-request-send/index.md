## Send POST Request
#### PHP
```
// API url
$url = '{URL TO SEND REQUEST}';

// Create cURL resource
$ch = curl_init($url);

// Request JSON data
$data = array(
          '{VARIABLE NAME}' => '{VARIABLE DATA}'
          // setup your array
);
$data = json_encode($data);

// Options cURL resource
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Get cURL result
$result = curl_exec($ch);

// Close cURL resource
curl_close($ch);

// Echo the result
echo $result;
```