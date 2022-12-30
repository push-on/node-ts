import express from "express";
import morgan from "morgan";
const app = express();
app.use(morgan("dev"));
app.get("/", (req, res)=>{
    res.json({
        hello: "world",
        mew: "mew",
        meww: "meww"
    });
});
const port = Number(process.env.PORT ?? 8080);
app.listen(port, "0.0.0.0", ()=>{
    console.log(`Server started at http://localhost:${port}`);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuYXBwLnVzZShtb3JnYW4oJ2RldicpKVxuXG5hcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5qc29uKHtcbiAgICBoZWxsbzogJ3dvcmxkJyxcbiAgICBtZXc6ICdtZXcnLFxuICAgIG1ld3c6ICdtZXd3J1xuICB9KVxufSlcblxuY29uc3QgcG9ydCA9IE51bWJlcihwcm9jZXNzLmVudi5QT1JUID8/IDgwODApXG5hcHAubGlzdGVuKHBvcnQsICcwLjAuMC4wJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgU2VydmVyIHN0YXJ0ZWQgYXQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YClcbn0pXG4iXSwibmFtZXMiOlsiZXhwcmVzcyIsIm1vcmdhbiIsImFwcCIsInVzZSIsImdldCIsInJlcSIsInJlcyIsImpzb24iLCJoZWxsbyIsIm1ldyIsIm1ld3ciLCJwb3J0IiwiTnVtYmVyIiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxhQUFhLFVBQVM7QUFDN0IsT0FBT0MsWUFBWSxTQUFRO0FBRTNCLE1BQU1DLE1BQU1GO0FBQ1pFLElBQUlDLEdBQUcsQ0FBQ0YsT0FBTztBQUVmQyxJQUFJRSxHQUFHLENBQUMsS0FBSyxDQUFDQyxLQUFLQyxNQUFRO0lBQ3pCQSxJQUFJQyxJQUFJLENBQUM7UUFDUEMsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLE1BQU07SUFDUjtBQUNGO0FBRUEsTUFBTUMsT0FBT0MsT0FBT0MsUUFBUUMsR0FBRyxDQUFDQyxJQUFJLElBQUk7QUFDeENiLElBQUljLE1BQU0sQ0FBQ0wsTUFBTSxXQUFXLElBQU07SUFDaENNLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLG1DQUFtQyxFQUFFUCxLQUFLLENBQUM7QUFDMUQifQ==