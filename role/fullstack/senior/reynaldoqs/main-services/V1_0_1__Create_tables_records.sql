#
# TABLE STRUCTURE FOR: AirportOperator
#

DROP TABLE IF EXISTS `AirportOperators`;

CREATE TABLE `AirportOperators` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `AirportOperators` (`ID`, `Name`) VALUES (1, 'provident');
INSERT INTO `AirportOperators` (`ID`, `Name`) VALUES (2, 'et');
INSERT INTO `AirportOperators` (`ID`, `Name`) VALUES (3, 'qui');
INSERT INTO `AirportOperators` (`ID`, `Name`) VALUES (4, 'eum');
INSERT INTO `AirportOperators` (`ID`, `Name`) VALUES (5, 'quo');
INSERT INTO `AirportOperators` (`ID`, `Name`) VALUES (6, 'qui');
INSERT INTO `AirportOperators` (`ID`, `Name`) VALUES (7, 'asperiores');
INSERT INTO `AirportOperators` (`ID`, `Name`) VALUES (8, 'a');
INSERT INTO `AirportOperators` (`ID`, `Name`) VALUES (9, 'quaerat');
INSERT INTO `AirportOperators` (`ID`, `Name`) VALUES (10, 'maiores');


#
# TABLE STRUCTURE FOR: Location
#

DROP TABLE IF EXISTS `Locations`;

CREATE TABLE `Locations` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Country` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ProvinceOrState` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Longitude` decimal(9,6) DEFAULT NULL,
  `Latitude` decimal(8,6) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `Locations` (`ID`, `Country`, `ProvinceOrState`, `Longitude`, `Latitude`) VALUES (1, 'UT', 'Missouri', '8.000000', '7.000000');
INSERT INTO `Locations` (`ID`, `Country`, `ProvinceOrState`, `Longitude`, `Latitude`) VALUES (2, 'WA', 'Georgia', '7.000000', '4.000000');
INSERT INTO `Locations` (`ID`, `Country`, `ProvinceOrState`, `Longitude`, `Latitude`) VALUES (3, 'IL', 'Vermont', '9.000000', '9.000000');
INSERT INTO `Locations` (`ID`, `Country`, `ProvinceOrState`, `Longitude`, `Latitude`) VALUES (4, 'WA', 'Idaho', '8.000000', '8.000000');
INSERT INTO `Locations` (`ID`, `Country`, `ProvinceOrState`, `Longitude`, `Latitude`) VALUES (5, 'LA', 'Kansas', '9.000000', '7.000000');
INSERT INTO `Locations` (`ID`, `Country`, `ProvinceOrState`, `Longitude`, `Latitude`) VALUES (6, 'SD', 'District of Columbia', '3.000000', '3.000000');
INSERT INTO `Locations` (`ID`, `Country`, `ProvinceOrState`, `Longitude`, `Latitude`) VALUES (7, 'LA', 'NorthCarolina', '5.000000', '9.000000');
INSERT INTO `Locations` (`ID`, `Country`, `ProvinceOrState`, `Longitude`, `Latitude`) VALUES (8, 'AK', 'Nevada', '4.000000', '7.000000');
INSERT INTO `Locations` (`ID`, `Country`, `ProvinceOrState`, `Longitude`, `Latitude`) VALUES (9, 'AR', 'NorthDakota', '2.000000', '6.000000');
INSERT INTO `Locations` (`ID`, `Country`, `ProvinceOrState`, `Longitude`, `Latitude`) VALUES (10, 'CT', 'Arkansas', '0.000000', '3.000000');


#
# TABLE STRUCTURE FOR: AirPort
#

DROP TABLE IF EXISTS `AirPorts`;

CREATE TABLE `AirPorts` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `AirPortCode` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PriorityOrder` int(11) DEFAULT NULL,
  `LocationID` int(11) NOT NULL,
  `AirportOperatorID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  FOREIGN KEY (`LocationID`) REFERENCES `Locations` (`ID`),
  FOREIGN KEY (`AirportOperatorID`) REFERENCES `AirportOperators` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `AirPorts` (`ID`, `Name`, `AirPortCode`, `PriorityOrder`, `LocationID`, `AirportOperatorID`) VALUES (1, 'Ms.', 'incidunt', 0, 1, 1);
INSERT INTO `AirPorts` (`ID`, `Name`, `AirPortCode`, `PriorityOrder`, `LocationID`, `AirportOperatorID`) VALUES (2, 'Dr.', 'autem', 29026644, 2, 2);
INSERT INTO `AirPorts` (`ID`, `Name`, `AirPortCode`, `PriorityOrder`, `LocationID`, `AirportOperatorID`) VALUES (3, 'Mr.', 'id', 2559223, 3, 3);
INSERT INTO `AirPorts` (`ID`, `Name`, `AirPortCode`, `PriorityOrder`, `LocationID`, `AirportOperatorID`) VALUES (4, 'Mrs.', 'ducimus', 610, 4, 4);
INSERT INTO `AirPorts` (`ID`, `Name`, `AirPortCode`, `PriorityOrder`, `LocationID`, `AirportOperatorID`) VALUES (5, 'Dr.', 'consequatur', 44003716, 5, 5);
INSERT INTO `AirPorts` (`ID`, `Name`, `AirPortCode`, `PriorityOrder`, `LocationID`, `AirportOperatorID`) VALUES (6, 'Mrs.', 'optio', 373507, 6, 6);
INSERT INTO `AirPorts` (`ID`, `Name`, `AirPortCode`, `PriorityOrder`, `LocationID`, `AirportOperatorID`) VALUES (7, 'Prof.', 'qui', 0, 7, 7);
INSERT INTO `AirPorts` (`ID`, `Name`, `AirPortCode`, `PriorityOrder`, `LocationID`, `AirportOperatorID`) VALUES (8, 'Mr.', 'incidunt', 7505, 8, 8);
INSERT INTO `AirPorts` (`ID`, `Name`, `AirPortCode`, `PriorityOrder`, `LocationID`, `AirportOperatorID`) VALUES (9, 'Miss', 'quo', 26081, 9, 9);
INSERT INTO `AirPorts` (`ID`, `Name`, `AirPortCode`, `PriorityOrder`, `LocationID`, `AirportOperatorID`) VALUES (10, 'Prof.', 'fugit', 14189, 10, 10);
