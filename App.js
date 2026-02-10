import React from 'react';
import { View, Text, Button } from 'react-native';

// Stub components for each feature
const TimeBacktracking = () => <Text>Time Backtracking Feature</Text>;
const BabyCues = () => <Text>Baby Cues Feature</Text>;
const MealIdeas = () => <Text>Meal Ideas Feature</Text>;
const CalmMode = () => <Text>Calm Mode Feature</Text>;
const SurvivalGuide = () => <Text>Survival Guide Feature</Text>;
const PackingLists = () => <Text>Packing Lists Feature</Text>;
const MockSchedule = () => <Text>Mock Schedule Feature</Text>;
const ChatSupport = () => <Text>Chat Support Feature</Text>;
const Reminders = () => <Text>Reminders Feature</Text>;
const PostpartumDepressionGuide = () => <Text>Postpartum Depression Guide Feature</Text>;
const SuicideHotline = () => <Text>Suicide Hotline Feature</Text>;
const CrockpotMealPlan = () => <Text>Crockpot Meal Plan Feature</Text>;
const OrganizationTools = () => <Text>Organization Tools Feature</Text>;
const SelfMassage = () => <Text>Self Massage Feature</Text>;
const AlarmClock = () => <Text>Alarm Clock Feature</Text>;
const Calculator = () => <Text>Calculator Feature</Text>;
const ClothingSizesAndTracking = () => <Text>Clothing Sizes and Tracking Feature</Text>;
const AlmanacCalendar = () => <Text>Almanac Calendar Feature</Text>;
const FoodPreferences = () => <Text>Food Preferences Feature</Text>;

const App = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text>ADHD Mom Helper App</Text>
      {/* Including each feature */}
      <TimeBacktracking />
      <BabyCues />
      <MealIdeas />
      <CalmMode />
      <SurvivalGuide />
      <PackingLists />
      <MockSchedule />
      <ChatSupport />
      <Reminders />
      <PostpartumDepressionGuide />
      <SuicideHotline />
      <CrockpotMealPlan />
      <OrganizationTools />
      <SelfMassage />
      <AlarmClock />
      <Calculator />
      <ClothingSizesAndTracking />
      <AlmanacCalendar />
      <FoodPreferences />
    </View>
  );
};

export default App;