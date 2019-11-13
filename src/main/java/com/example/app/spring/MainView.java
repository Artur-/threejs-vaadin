package com.example.app.spring;

import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route
public class MainView extends VerticalLayout {

    public MainView() {
        for (int i = 0; i < 5; i++) {
            Three three = new Three();
            add(three);
        }
    }

}
