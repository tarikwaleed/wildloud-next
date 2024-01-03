import { SimpleGrid } from '@chakra-ui/react';
import CashoutCard from './cashout_card'; // Assuming CashoutCard component is imported correctly

const Dashboard = () => {
    return (
        <SimpleGrid columns={[1, 2]} gap={4}>
            <CashoutCard imagePath="/images/bx.jpg" title1="5$ Cashout" title2="4500 Points" />
            <CashoutCard imagePath="/images/out.png" title1="50 Points" title2="5$" />
            <CashoutCard imagePath="/images/gold1.png" title1="100 Points" title2="$10" />
            <CashoutCard imagePath="/images/bx.jpg" title1="200" title2="$15" />
            <CashoutCard imagePath="/images/gold1.png" title1="500 Points" title2="$30" />
            <CashoutCard imagePath="/images/gold2.png" title1="5$ Cashout" title2="4500 Points" />
        </SimpleGrid>
    );
};

export default Dashboard;
