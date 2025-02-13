```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic - only runs once on mount
    console.log('Mounted!'); //This log will appear only once 
  }, []);

  return <div>Count: {count}</div>;
}
```