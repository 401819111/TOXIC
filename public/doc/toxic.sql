/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50173
Source Host           : localhost:3306
Source Database       : toxic

Target Server Type    : MYSQL
Target Server Version : 50173
File Encoding         : 65001

Date: 2018-04-03 17:05:34
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `address_detailed`
-- ----------------------------
DROP TABLE IF EXISTS `address_detailed`;
CREATE TABLE `address_detailed` (
  `address_id` int(12) NOT NULL,
  `address_province` varchar(12) NOT NULL COMMENT '省',
  `address_city` varchar(12) NOT NULL COMMENT '市',
  `address_county` varchar(12) NOT NULL COMMENT '区、县',
  `address_detailed` varchar(40) NOT NULL COMMENT '详细地址',
  `address_zip` int(6) NOT NULL COMMENT '邮编',
  `address_tel` int(11) NOT NULL,
  `address_recvname` varchar(20) NOT NULL,
  `address_default` int(2) NOT NULL DEFAULT '0',
  `user_id` int(12) NOT NULL,
  `is_show` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`address_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `address_detailed_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user_information` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of address_detailed
-- ----------------------------

-- ----------------------------
-- Table structure for `car_details`
-- ----------------------------
DROP TABLE IF EXISTS `car_details`;
CREATE TABLE `car_details` (
  `cardeta_id` int(11) NOT NULL AUTO_INCREMENT,
  `car_gdnum` int(4) NOT NULL DEFAULT '1',
  `car_id` int(11) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `is_show` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`cardeta_id`),
  KEY `car_id` (`car_id`),
  KEY `goods_id` (`goods_id`),
  CONSTRAINT `car_details_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `shop_car` (`car_id`),
  CONSTRAINT `car_details_ibfk_2` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`goods_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car_details
-- ----------------------------

-- ----------------------------
-- Table structure for `collection`
-- ----------------------------
DROP TABLE IF EXISTS `collection`;
CREATE TABLE `collection` (
  `col_id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_id` int(11) NOT NULL,
  `user_id` int(12) NOT NULL,
  `col_time` date NOT NULL,
  `is_show` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`col_id`),
  KEY `goods_id` (`goods_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `collection_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user_information` (`user_id`),
  CONSTRAINT `collection_ibfk_1` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`goods_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of collection
-- ----------------------------

-- ----------------------------
-- Table structure for `dictionary`
-- ----------------------------
DROP TABLE IF EXISTS `dictionary`;
CREATE TABLE `dictionary` (
  `dic_id` int(11) NOT NULL AUTO_INCREMENT,
  `is_show` int(1) NOT NULL DEFAULT '1',
  `user_sex` int(1) DEFAULT NULL,
  `goods_class` varchar(10) NOT NULL,
  PRIMARY KEY (`dic_id`),
  KEY `user_sex` (`user_sex`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dictionary
-- ----------------------------

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `goods_id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_name` varchar(80) NOT NULL,
  `goods_jinjia` float NOT NULL COMMENT '进价',
  `goods_sale` float NOT NULL COMMENT '售价',
  `goods_img` text NOT NULL,
  `goods_cover` text NOT NULL COMMENT '封面图',
  `goods_discription` varchar(250) DEFAULT NULL,
  `goods_sendprice` float NOT NULL,
  `goods_baoxiu` varchar(100) DEFAULT NULL,
  `goods_class` varchar(10) NOT NULL,
  `creater` varchar(20) NOT NULL,
  `is_show` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`goods_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '阿萨德', '4', '41', '撒范德萨', '阿萨德', '45', '45', 'asd', 'asd', '阿萨德', '1');

-- ----------------------------
-- Table structure for `goods_detail`
-- ----------------------------
DROP TABLE IF EXISTS `goods_detail`;
CREATE TABLE `goods_detail` (
  `goodsdet_id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_id` int(11) NOT NULL,
  `zhou` varchar(8) DEFAULT NULL COMMENT ' ',
  `isline` int(1) DEFAULT NULL,
  `goods_num` int(8) NOT NULL,
  `color` varchar(8) DEFAULT NULL,
  `dpi` int(11) DEFAULT NULL COMMENT '输入框',
  `size` varchar(20) DEFAULT NULL COMMENT '输入框',
  `weight` varchar(20) NOT NULL DEFAULT '' COMMENT '输入框',
  `key_number` int(8) DEFAULT NULL COMMENT '输入框',
  `line_length` float DEFAULT NULL COMMENT '输入框',
  `light` varchar(50) DEFAULT NULL COMMENT '输入框',
  `zhangtuo` int(1) DEFAULT NULL COMMENT '01有无',
  `key_caizhi` varchar(50) DEFAULT NULL COMMENT '输入框',
  `is_show` int(1) DEFAULT NULL COMMENT '01',
  PRIMARY KEY (`goodsdet_id`),
  KEY `goods_id` (`goods_id`),
  CONSTRAINT `goods_detail_ibfk_1` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`goods_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods_detail
-- ----------------------------

-- ----------------------------
-- Table structure for `keybord_custom`
-- ----------------------------
DROP TABLE IF EXISTS `keybord_custom`;
CREATE TABLE `keybord_custom` (
  `custom_id` int(11) NOT NULL AUTO_INCREMENT,
  `key_num` int(3) NOT NULL,
  `board_color` int(2) NOT NULL,
  `key_light` int(2) NOT NULL,
  `custom_img` text NOT NULL,
  `custom_detail` text NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`custom_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of keybord_custom
-- ----------------------------

-- ----------------------------
-- Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `order_id` int(11) NOT NULL,
  `order_state` varchar(10) NOT NULL,
  `user_id` int(12) NOT NULL,
  `iscustom` int(1) NOT NULL,
  `custom_id` int(11) DEFAULT NULL,
  `sum_price` float(10,0) NOT NULL,
  `is_show` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`),
  KEY `custom_id` (`custom_id`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_information` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for `order_details`
-- ----------------------------
DROP TABLE IF EXISTS `order_details`;
CREATE TABLE `order_details` (
  `orddetail_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `order_gdnum` int(10) NOT NULL,
  `address_id` int(12) NOT NULL,
  `goodsdet_id` int(11) NOT NULL,
  `order_date` date NOT NULL,
  `orddetail_beizhu` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`orddetail_id`),
  KEY `order_id` (`order_id`),
  KEY `address_id` (`address_id`),
  KEY `goodsdet_id` (`goodsdet_id`),
  CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`),
  CONSTRAINT `order_details_ibfk_3` FOREIGN KEY (`address_id`) REFERENCES `address_detailed` (`address_id`),
  CONSTRAINT `order_details_ibfk_4` FOREIGN KEY (`goodsdet_id`) REFERENCES `goods_detail` (`goodsdet_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_details
-- ----------------------------

-- ----------------------------
-- Table structure for `shop_car`
-- ----------------------------
DROP TABLE IF EXISTS `shop_car`;
CREATE TABLE `shop_car` (
  `car_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `is_show` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`car_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `shop_car_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_information` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop_car
-- ----------------------------

-- ----------------------------
-- Table structure for `user_information`
-- ----------------------------
DROP TABLE IF EXISTS `user_information`;
CREATE TABLE `user_information` (
  `user_id` int(12) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL COMMENT '用户昵称',
  `user_birthday` date DEFAULT NULL,
  `user_sex` int(2) NOT NULL DEFAULT '1' COMMENT '默认是男',
  `user_headphoto` text NOT NULL,
  `user_tel` int(11) DEFAULT NULL COMMENT '以1开头的11位数字',
  `user_email` varchar(30) DEFAULT NULL,
  `user_acount` varchar(12) NOT NULL COMMENT '账户名',
  `user_password` varchar(20) NOT NULL COMMENT '用户密码',
  `user_peromissin` int(4) NOT NULL COMMENT '用户权限',
  `creater` varchar(20) NOT NULL,
  `is_show` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_information
-- ----------------------------
