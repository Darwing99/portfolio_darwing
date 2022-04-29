-- MySQL dump 10.14  Distrib 5.5.68-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: dbnodered
-- ------------------------------------------------------
-- Server version	5.5.68-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `rlog_sistema`
--

use dbgrafana;
DROP TABLE IF EXISTS `rlog_sistema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rlog_sistema` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `server` varchar(200) NOT NULL,
  `cpu` varchar(100) NOT NULL,
  `disco_total` varchar(100) NOT NULL,
  `disco_libre` varchar(100) NOT NULL,
  `disco_usado` varchar(100) NOT NULL,
  `ram_total` varchar(100) NOT NULL,
  `ram_libre` varchar(100) NOT NULL,
  `ram_usada` varchar(100) NOT NULL,
  `tx` varchar(100) NOT NULL,
  `rx` varchar(100) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=216 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rlog_sistema`
--

LOCK TABLES `rlog_sistema` WRITE;
/*!40000 ALTER TABLE `rlog_sistema` DISABLE KEYS */;
INSERT INTO `rlog_sistema` VALUES (182,'dhernandez','7.1','23','20','3.5','6.2','4.9','0.637695','0.41 ','1.19 ','2022-04-06 22:42:58'),(184,'dhernandez','13.3','23','20','3.5','6.2','4.9','0.634766','0.41 ','1.19 ','2022-04-06 22:43:01'),(185,'dhernandez','13.3','23','20','3.5','6.2','4.9','0.637695','0.41 ','1.19 ','2022-04-06 22:43:03'),(198,'dhernandez','13.3','23','20','3.5','6.2','4.9','0.615234','0.45 ','1.29 ','2022-04-06 23:12:53'),(203,'dhernandez','7.1','23','20','3.5','6.2','4.9','0.613281','0.47 ','1.35 ','2022-04-06 23:36:53'),(206,'dhernandez','6.2','23','20','3.5','6.2','5.0','0.606445','0.47 ','1.37 ','2022-04-06 23:44:36'),(209,'dhernandez','','23','20','3.5','6.2','4.9','0.612305','0.48 ','1.38 ','2022-04-06 23:49:38'),(210,'dhernandez','12.5','23','20','3.5','6.2','5.4','0.441406','0.05 ','0.17 ','2022-04-07 02:09:05'),(211,'dhernandez','13.3','23','20','3.5','6.2','5.3','0.495117','0.05 ','0.18 ','2022-04-07 02:09:42'),(212,'dhernandez','','23','20','3.5','6.2','5.3','0.512695','0.06 ','0.18 ','2022-04-07 02:10:07'),(213,'dhernandez','23.5','23','20','3.5','6.2','5.3','0.526367','0.09 ','0.26 ','2022-04-07 02:18:17'),(214,'dhernandez','7.1','23','20','3.5','6.2','5.3','0.537109','0.09 ','0.26 ','2022-04-07 02:18:55'),(215,'dhernandez','','23','20','3.5','6.2','5.3','0.540039','0.10 ','0.27 ','2022-04-07 02:19:11');
/*!40000 ALTER TABLE `rlog_sistema` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-06 21:16:39