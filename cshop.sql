-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2020 at 02:21 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `graphics`
--

CREATE TABLE `graphics` (
  `gid` int(50) NOT NULL,
  `gname` varchar(200) NOT NULL,
  `gprice` int(50) NOT NULL,
  `cid` int(50) NOT NULL,
  `status` varchar(200) NOT NULL,
  `gimage` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `graphics`
--

INSERT INTO `graphics` (`gid`, `gname`, `gprice`, `cid`, `status`, `gimage`) VALUES
(1, 'amd-nvidia', 5000, 3, 'available', 'https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-04-24-17-31/digitalfoundry-best-graphics-card-every-amd-nvidia-tested-7001-1587745896837.jpg/EG11/resize/1200x-1/digitalfoundry-best-graphics-card-every-amd-nvidia-tested-7001-1587745896837.jpg'),
(2, 'amd', 5600, 3, 'available', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMVFRUVFxUZGBYXFhgVGBcYFRgXGBcYFRgYICggGBolHxYVITIiJSkrLi4uFyAzODUtNygtLisBCgoKDg0OGhAQGzAlICUtLS0vMi0tLS8tLS0tLS0tLS0vLy0tLS0tLS0tLS0tNS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAIFBgABBwj/xABAEAACAQIEAwcBBgQFAwQDAAABAhEAAwQSITEFQVEGEyIyYXGBkRQjQlKhwWJysdEHgrLh8CQzUxWSovFDY3P/xAAZAQACAwEAAAAAAAAAAAAAAAABAgADBAX/xAAuEQADAAIBAwIEBQQDAAAAAAAAAQIDEQQSITEiQRMyUYEUYZGhsQVCccEV0fD/2gAMAwEAAhEDEQA/A'),
(3, 'GeForce-iGame-GTX-1060', 6000, 3, 'available', 'https://uidesign.gbtcdn.com/gb_blog/2741/Colorful-GeForce-iGame-GTX-1060-Vulcan-U-6G-Graphics-Card.JPG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `graphics`
--
ALTER TABLE `graphics`
  ADD PRIMARY KEY (`gid`),
  ADD KEY `cid` (`cid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `graphics`
--
ALTER TABLE `graphics`
  MODIFY `gid` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `graphics`
--
ALTER TABLE `graphics`
  ADD CONSTRAINT `graphics_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `category` (`catid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
