for ((i=1; i<=10; i++)); do
    curl -X POST -d '{"foo":"bar"}' -H 'Content-Type:application/json' http://localhost:8888
done

