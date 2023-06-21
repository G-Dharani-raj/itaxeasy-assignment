import {
	Box,
	Button,
	Flex,
	HStack,
	Input,
	Select,
	Text,
	VStack,
} from "@chakra-ui/react";
import React from "react";

const Individual = () => {
	return (
		<Box>
			<Flex>
				<Text>Whether opting for taxation under Section 115BAC?</Text>
				<Select>
					<option value="" disabled selected>
						Select
					</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</Select>
			</Flex>
			<Flex>
				<Text>Male / Female / Senior Citizen</Text>
				<Select>
					<option value="" disabled selected>
						Select
					</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="senior_citizen">Senior Citizen</option>
					<option value="super_senior_citizen">
						Super Senior Citizen
					</option>
				</Select>
			</Flex>
			<Flex>
				<Text>Residential Status</Text>
				<Select>
					<option value="" disabled selected>
						Select
					</option>
					<option value="resident">Resident</option>
					<option value="non_resident">Non-Resident</option>
					<option value="not_ordinary_resident">
						Not Ordinary Resident
					</option>
				</Select>
			</Flex>
			<Flex>
				<Text>
					Income from Salary (Income from salary after standard
					deduction of Rs.50000.)
				</Text>
				<Text>
					Income from salary (Income from Salary before
					Exemptions/Deductions)
				</Text>
				<Input type="number" />
			</Flex>
			<Flex>
				<Text>Income from House Property</Text>
				<Flex>
					<Button>Show Details</Button>
					<Input type="number" disabled />
				</Flex>
			</Flex>
			<Box>
				<VStack>
					<Text>a. Income from Self-occupied Property</Text>
					<Text>Interest Paid/Payable on Housing Loan</Text>
					<Flex>
						<Text>1. Interest on Housing Loan</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>Income from self-occupied house property</Text>
						<Input type="number" />
					</Flex>
				</VStack>
			</Box>
			<Box>
				<VStack>
					<Text>b. Income from Let-out Property</Text>
					<Flex>
						<Text>
							1. Annual Letable Value/Rent Received or Receivable
						</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>
							2. Less: Municipal Taxes Paid During the Year
						</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>3. Less:Unrealized Rent</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>4. Net Annual Value (1-(2+3))</Text>
						<Input type="number" />
					</Flex>
					<Text>Less: Deductions from Net Annual Value</Text>
					<Flex>
						<Text>
							i. Standard Deduction @ 30% of Net Annual Value
						</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>ii. Interest on Housing Loan</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>Income from Let-out House Property</Text>
						<Input type="number" />
					</Flex>
				</VStack>
			</Box>

			<Box>
				<VStack>
					<Box>
						<Text>
							Short Term Capital GainS (Other than covered under
							section 111A)
						</Text>
						<HStack>
							<VStack>
								<Box>From 01/04/2023 to 15/06/2023</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/06/2023 to 15/09/2023</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/09/2023 to 15/12/2023</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/12/2023 to 15/03/2024</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/03/2024 to 31/03/2024</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>Total</Box>
								<Input type="number" />
							</VStack>
						</HStack>
					</Box>
					<Box>
						<Text>
							Short Term Capital GainS (Covered under section
							111A)
						</Text>
						<HStack>
							<VStack>
								<Box>From 01/04/2023 to 15/06/2023</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/06/2023 to 15/09/2023</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/09/2023 to 15/12/2023</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/12/2023 to 15/03/2024</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/03/2024 to 31/03/2024</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>Total</Box>
								<Input type="number" />
							</VStack>
						</HStack>
					</Box>
					<Box>
						<Text>
							Long Term Capital Gains (Charged to tax @ 20%)
						</Text>
						<HStack>
							<VStack>
								<Box>From 01/04/2023 to 15/06/2023</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/06/2023 to 15/09/2023</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/09/2023 to 15/12/2023</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/12/2023 to 15/03/2024</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/03/2024 to 31/03/2024</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>Total</Box>
								<Input type="number" />
							</VStack>
						</HStack>
					</Box>
					<Box>
						<Text>
							Long Term Capital Gains (Charged to tax @ 10%)
						</Text>
						<HStack>
							<VStack>
								<Box>From 01/04/2023 to 15/06/2023</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/06/2023 to 15/09/2023</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/09/2023 to 15/12/2023</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/12/2023 to 15/03/2024</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/03/2024 to 31/03/2024</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>Total</Box>
								<Input type="number" />
							</VStack>
						</HStack>
					</Box>
					<Box>
						<Text>
							Long Term Capital GainS (Covered under section 112A)
						</Text>
						<HStack>
							<VStack>
								<Box>From 01/04/2023 to 15/06/2023</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/06/2023 to 15/09/2023</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/09/2023 to 15/12/2023</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/12/2023 to 15/03/2024</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>From 16/03/2024 to 31/03/2024</Box>
								<Input type="number" />
							</VStack>
							<VStack>
								<Box>Total</Box>
								<Input type="number" />
							</VStack>
						</HStack>
					</Box>
				</VStack>
			</Box>
			<Flex>
				<Text>Income From Other Sources</Text>
				<Flex>
					<Button>Show Details</Button>
					<Input type="number" disabled />
				</Flex>
			</Flex>
			<Box>
				<VStack>
					<Flex>
						<Text>Interest</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>Commission/Other Income</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>
							Winnings from Lottery, Crossword Puzzles, etc.
						</Text>
						<Input type="number" />
					</Flex>
				</VStack>
			</Box>
			<Flex>
				<Text>
					Profits and Gains of Business or Profession (enter profit
					only)
				</Text>
				<Input type="number" />
			</Flex>
			<Flex>
				<Text>Agricultural Income</Text>
				<Input type="number" />
			</Flex>
			<Flex>
				<Text>Deductions</Text>
				<Flex>
					<Button>Show Details</Button>
					<Input type="number" disabled />
				</Flex>
			</Flex>
			<Box>
				<VStack>
					<Flex>
						<Text>Life Insurance premium paid</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>Payment for annuity plan</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>Contribution toward provident fund / PPF</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>Investment in NSC (VIII issue) + Interest</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>Contribution toward ULIP</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>
							Contribution toward notified pension fund by MF/UTI
						</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>Re-payment of housing loan etc</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>Tuition fees paid for children</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>
							5 Years fixed deposit with PO or Schedule Bank
						</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>Contribution toward NPF</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>
							Employee's / Self-employed contribution toward NPS
							(up to 20%) (u/s 80CCD)
						</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>
							Additional contribution towards NPS [u/s 80CCD(1B)]
						</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>
							Employer's contribution toward NPS (u/s 80CCD)
						</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>Deposit with Sukanya Samridhi Accounts</Text>
						<Input type="number" />
					</Flex>
					<Flex>
						<Text>Any other deductable (u/s 80C)</Text>
						<Input type="number" />
					</Flex>
					<Flex bg={"black"}>
						<Text color={"white"}>Total</Text>
						<Input type="number" disabled bg={"white"} />
					</Flex>
				</VStack>
			</Box>
		</Box>
	);
};

export default Individual;
