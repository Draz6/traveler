/*
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getDataFromApi() {
      try {
        await getDocs(collection(db, "trips")).then((querySnapshot) => {
          const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setTrips(newData);
          setIsLoading(false);
        });
      } catch (error) {
        throw new Error(error);
      }
    }
    getDataFromApi();
  }, []); */

    /* userclub
    const text = textRef.current.value;
     const from = fromRef.current.value;
     const to = toRef.current.value;
     const email = emailRef.current.value;
     let image = imageRef.current.value;
     if (image == "") {
       image = user;
     }*/

