<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class PageController extends AbstractController
{
    #[Route(path: '/{id}', name: 'page')]
    public function index(string $id): Response
    {
        return $this->render(sprintf('page/_%s.html.twig', $id));
    }
}
