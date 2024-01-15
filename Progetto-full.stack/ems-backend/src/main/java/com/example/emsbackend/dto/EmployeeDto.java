package com.example.emsbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Repository;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

//dto è un oggetto utilizzato per trasferire dati
// tra diverse parti di un'applicazione

public class EmployeeDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
}
