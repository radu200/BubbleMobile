export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Bookings: undefined;
  User:undefined;
};

export type BookingsParamsList = {
  BookingListScreen: undefined;
};

export type UserParamsList = {
  ProfileScreen: undefined;
};

export type BookingSummary = {
  id:string,
  bookingStatus:boolean,
  scheduledStart: string,
  scheduledDuration: number,
  otherUserFullName: string,
 }

type children = {
  age: number,
  gender:number
}

type adress = {
  houseNo:string,
  postcode: string,
  street: string,
  town: string
}

export type profileTypes =  {
  id:string,
  fullName:string,
  email:string,
  mobileNumber:string,
  profileImageUrl:string,
  biography:string,
  accountTotal:number,
  children:Array<children>,
  address:adress,
}
