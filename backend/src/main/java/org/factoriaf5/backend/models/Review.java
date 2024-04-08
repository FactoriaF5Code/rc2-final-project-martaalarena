package org.factoriaf5.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String name;
    String urlImg;
    Integer parking;
    String description;
    Integer amountOfPeople;
    Integer dificulty;
    Integer waveCuality;
    Integer accessibility;

    public Review() {
    }

    public Review(Integer id, String name, String urlImg, Integer parking, String description, Integer amountOfPeople,
            Integer dificulty, Integer waveCuality, Integer accessibility) {
        this.id = id;
        this.name = name;
        this.urlImg = urlImg;
        this.parking = parking;
        this.description = description;
        this.amountOfPeople = amountOfPeople;
        this.dificulty = dificulty;
        this.waveCuality = waveCuality;
        this.accessibility = accessibility;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrlImg() {
        return urlImg;
    }

    public void setUrlImg(String urlImg) {
        this.urlImg = urlImg;
    }

    public Integer getParking() {
        return parking;
    }

    public void setParking(Integer parking) {
        this.parking = parking;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getAmountOfPeople() {
        return amountOfPeople;
    }

    public void setAmountOfPeople(Integer amountOfPeople) {
        this.amountOfPeople = amountOfPeople;
    }

    public Integer getDificulty() {
        return dificulty;
    }

    public void setDificulty(Integer dificulty) {
        this.dificulty = dificulty;
    }

    public Integer getWaveCuality() {
        return waveCuality;
    }

    public void setWaveCuality(Integer waveCuality) {
        this.waveCuality = waveCuality;
    }

    public Integer getAccessibility() {
        return accessibility;
    }

    public void setAccessibility(Integer accessibility) {
        this.accessibility = accessibility;
    }
}
