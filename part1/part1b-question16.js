let statistics = {
				redCars: 21,
				blueCars: 45,
				greeCars: 12,
				raceCars: 5, 
				blackCars: 40,
				rareCars: 2
};

for (key in statistics) {
				if (key[0] == 'r' || statistics[key]%2==1){
								console.log(statistics[key]);
				}
}
