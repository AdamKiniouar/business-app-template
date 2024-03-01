# Booking tables
-Booking
 ~Id
 ~Timestamp
 ~CustomerId
 ~Duration
 ~ServiceId
 ~WorkerId
 ~TimeSlotId
 ~CreationTime

-Services
 ~Id
 ~Name
 ~Duration
 ~Cost
 ~Description
 ~CreationTime

-Timeslots
 ~Id
 ~Start
 ~End
 ~CreationTime

-Workers
 ~Id
 ~Name
 ~Experience
 ~Description
 ~CreationTime

-Customers
 ~Id
 ~Firstname
 ~Surname
 ~Telephone
 ~Email
 ~BookedCount
 ~CreationTime
