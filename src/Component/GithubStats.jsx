// // import React from "react"

// import {
//     Box,
//     Text,
//     Image,
//     VStack,
//     Heading
//   } from '@chakra-ui/react'





//   import React from "react";
// import GitHubCalendar from "react-github-calendar";

// import "./calender.css";

 

// export const GithubStats = () => {
// 	const selectLast12Months = (contributions) => {
// 		const today = new Date();
// 		const startTimestamp = new Date(
// 			today.getFullYear(),
// 			today.getMonth() - 11,
// 			1
// 		).getTime();
// 		const endTimestamp =
// 			new Date(today.getFullYear(), today.getMonth() + 1, 1).getTime() - 1;

// 		return contributions.filter((day) => {
// 			const contributionTimestamp = new Date(day.date).getTime();

// 			return (
// 				contributionTimestamp >= startTimestamp &&
// 				contributionTimestamp <= endTimestamp
// 			);
// 		});
// 	};

//     return <Box pb = '50px'  >


//       <Heading color = 'black' fontSize={35}> <Text as = 'span' color = 'black'>Github</Text> Calender</Heading>


//           <VStack mt = '70px'>
//           <div className="github-calender">
// 				<GitHubCalendar
// 					className="github-calendar-class"
// 					transformData={selectLast12Months}
// 					username="SatyaIndraDev"
// 					color={"red"}
// 					blockSize={20}
// 					fontSize={20}
// 					showColorLegend
// 					hideTotalCount
// 				>
					
// 				</GitHubCalendar>
// 			</div>
//           </VStack>








// {/* -------------------------------- */}
// <Heading mt="150px" color = 'black' fontSize={35}> <Text as = 'span' color = 'black'>Github</Text> Stats</Heading>


// <VStack>
// <div className="github-stats">
// 				<div id="github-streak-stats">
// 					<img
// 						src="https://camo.githubusercontent.com/677095d32d273932583b863f4142daa6d7da6851dd2e6f9538403f4dab3c3cea/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d7361747961696e6472616465762673686f775f69636f6e733d74727565266c6f63616c653d656e"
// 						alt="sid Stats"
// 						id="github-streak-stats"
// 					/>
// 				</div>
// 				<div id="github-top-langs">
// 					<img
// 						src="https://camo.githubusercontent.com/221c4922ef74e18d266f3dc45e7b78f53806584dec83d4ef9e21812df96cdd80/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d7361747961696e6472616465762673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
// 						alt="sid Stats"
// 						id="github-top-langs"
// 					/>
// 				</div>
// 				<div id="github-stats-card">
// 					<img
// 						src="https://camo.githubusercontent.com/5017abee1ceb0c462e3ce34c59a7f8c12e43d7e6dac12460c3cdb3ffa14a9376/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d7361747961696e64726164657626"
// 						alt="sid Stats"
// 						id="github-stats-card"
// 					/>
// 				</div>
// 			</div>



// </VStack>



//         </Box>

// }



import { Box, Flex, Heading, Image, Link, Stack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export const GithubStats  = () => {
  const githubUsername = "lakshmiprasanna203"; 

  return (
    <Box m={"auto"} w={"90%"} textAlign="center" mt={100}>
      <Heading fontFamily={'Ubuntu, sans-serif'} fontSize={50} fontWeight={700}><i>GitHub Stats</i></Heading>
      <Stack>
        <Box className="react-activity-calendar" m={"auto"}  mb={"40px"}>
          <Link href={`https://github.com/${githubUsername}`} target="_blank">
            <GitHubCalendar username={githubUsername} />
          </Link>
        </Box>
        <Flex
          w={"100%"}
          m="auto"
          justifyContent={{ base: "center", md: "space-around" }}
          marginTop="30px"
          direction={{ base: "column", md: "row" }}
        >
          <Link m={"auto"} w={{ base: "100%", md: "33%" }} mt={{ base: "10px", md: "0px" }} href={`https://github.com/${githubUsername}`} target="_blank">
            <Flex justifyContent={"center"}>
              <Image id="github-streak-stats" src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}`} />
            </Flex>
          </Link>

          <Link m={"auto"} w={{ base: "100%", md: "30%" }} mt={{ base: "10px", md: "0px" }} href={`https://github.com/${githubUsername}`} target="_blank">
            <Flex justifyContent={"center"}>
              <Image id="github-top-langs" src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&show_icons=true&locale=en&layout=compact`} />
            </Flex>
          </Link>

          <Link m={"auto"} w={{ base: "100%", md: "31%" }} mt={{ base: "10px", md: "0px" }} href={`https://github.com/${githubUsername}`} target="_blank">
            <Flex justifyContent={"center"}>
              <Image id="github-stats-card" src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&locale=en`} />
            </Flex>
          </Link>
        </Flex>
      </Stack>
    </Box>
  );
};

