-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 12, 2023 at 02:40 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `Id` int(11) NOT NULL,
  `Fullname` varchar(250) NOT NULL,
  `Email` varchar(250) NOT NULL,
  `Phone` varchar(250) NOT NULL,
  `Location` varchar(250) NOT NULL,
  `Message` varchar(250) NOT NULL,
  `Date` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`Id`, `Fullname`, `Email`, `Phone`, `Location`, `Message`, `Date`) VALUES
(1, 'ruth m', 'ruth221016106@gmail.com', '0788956665', 'huye', 'sddfffseeeff', '2023-02-10 15:30:20'),
(2, 'Mutuyeyezu ruth', 'ruthmutuyeyezu@gmail.com', '0788956665', 'huye', 'Get in touch,\\r\\nSend message', '2023-02-12 14:36:02');

-- --------------------------------------------------------

--
-- Table structure for table `ordermenu`
--

CREATE TABLE `ordermenu` (
  `Id` int(11) NOT NULL,
  `Fullname` varchar(200) NOT NULL,
  `Email` varchar(200) NOT NULL,
  `Phone` varchar(100) NOT NULL,
  `Selectmenu` varchar(100) NOT NULL,
  `Address` varchar(200) NOT NULL,
  `Date` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ordermenu`
--

INSERT INTO `ordermenu` (`Id`, `Fullname`, `Email`, `Phone`, `Selectmenu`, `Address`, `Date`) VALUES
(1, 'ruth m', 'ruth221016106@gmail.com', '0788956665', 'Salade,Soda', 'huye', '2023-02-10 15:24:02'),
(2, 'Mutuyeyezu ruth', 'ruthmutuyeyezu@gmail.com', '0788956665', 'Brochettes,Soda', 'huye', '2023-02-12 14:35:21');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `Id` int(11) NOT NULL,
  `Firstname` varchar(100) NOT NULL,
  `Lastname` varchar(100) NOT NULL,
  `Dateofbirth` varchar(100) NOT NULL,
  `Emailid` varchar(100) NOT NULL,
  `Mobilenumber` varchar(10) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `City` varchar(100) NOT NULL,
  `Pincode` varchar(20) NOT NULL,
  `State` varchar(50) NOT NULL,
  `Country` varchar(50) NOT NULL,
  `Hobbies` varchar(100) NOT NULL,
  `Qualification` varchar(100) NOT NULL,
  `Courses` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`Id`, `Firstname`, `Lastname`, `Dateofbirth`, `Emailid`, `Mobilenumber`, `Gender`, `Address`, `City`, `Pincode`, `State`, `Country`, `Hobbies`, `Qualification`, `Courses`) VALUES
(1, 'shimwa', 'divin', 'a:3:{i:0;s:1:\"6\";i:1;s:1:\"2\";i:2;s:0:\"\";}', 'ruth221016106@gmail.com', '78856668', 'male', 'muhanga', 'muhanga', '0', 'muhanga', 'Rwanda', 'a:4:{i:0;s:7:\"drawing\";i:1;s:7:\"singing\";i:2;s:7:\"dancing\";i:3;N;}', 'a:3:{i:0;s:2:\"dd\";i:1;N;i:2;s:2:\"mm\";}', ' B.com'),
(2, 'shimwa', 'divin', 's:4:\"6/2/\";', 'ruth221016106@gmail.com', '78856668', 'male', 'muhanga', 'muhanga', '0', 'muhanga', 'Rwanda', 's:24:\"drawing,singing,dancing,\";', 's:6:\"dd,,mm\";', ' B.com'),
(3, 'shimwa', 'divin', 's:4:\"6/2/\";', 'ruth221016106@gmail.com', '078856668', 'male', 'muhanga', 'muhanga', '0000', 'muhanga', 'Rwanda', 's:24:\"drawing,singing,dancing,\";', 's:6:\"dd,,mm\";', ' B.com'),
(4, 'ahxgjhaJHASGKhgd', 'SADsdSDdf', 's:4:\"2/2/\";', 'dafadfADFASD&quot;GDFD.VVV', '909098909', 'male', 'JASBSDJHABDCJBAD', 'ASDFAD', 'ASDFASD', 'ADFAD', 'Rwanda', 's:33:\"drawing,singing,dancing,sketching\";', 's:11:\"TTTTT,,RRRR\";', ' BCA'),
(5, 'ahxgjhaJHASGKhgd', 'SADsdSDdf', 's:4:\"2/2/\";', 'dafadfADFASD&quot;GDFD.VVV', '909098909', 'male', 'JASBSDJHABDCJBAD', 'ASDFAD', 'ASDFASD', 'ADFAD', 'Rwanda', 's:33:\"drawing,singing,dancing,sketching\";', 's:11:\"TTTTT,,RRRR\";', ' BCA'),
(6, 'asdhlaDSLJD', 'HWEWEWE', 's:4:\"6/3/\";', 'JKAWHKQJWH&quot;HSHDS.DKFD', '8976776767', 'male', 'WKENLNWEHFNJKNDMSD', 'QERWERWE', '83734879', 'EJHR23892YU8942', 'Tanzania', 's:17:\"drawing,,dancing,\";', 's:2:\",,\";', ' BCA'),
(7, 'shimwa', 'SADsdSDdf', '13/10/', 'dafadfADFASD&quot;GDFD.VVV', '909098909', 'female', 'yeyeyeryeyerye', 'ertertert', 'etetertert', 'ertertet', 'Rwanda', 'drawing,singing,,', ',,', ' BCA'),
(8, 'asdhlaDSLJD', 'SADsdSDdf', '15/12/1913', 'ruth221016106@gmail.com', '8976776767', 'female', 'gdghhgdghdg', 'ASDFAD', '83734879', 'EJHR23892YU8942', 'Kenya', ',,,sketching,', ',,', ' B.com');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Id`, `username`, `password`) VALUES
(1, 'ruthm', '12345'),
(2, 'mimi', '54321');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ordermenu`
--
ALTER TABLE `ordermenu`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ordermenu`
--
ALTER TABLE `ordermenu`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
